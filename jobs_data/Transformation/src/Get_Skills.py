#!/usr/bin/env python
# coding: utf-8

# In[2]:


import sys
sys.path.append('/home/nyto/.local/pipx/venvs/spacy/lib/python3.11/site-packages')
#sys.path.pop()


# In[27]:


import pandas as pd
import spacy
from tqdm import tqdm
from spacy.matcher import PhraseMatcher

def load_skill_keywords(skillset_filepath, file_type='csv'):
    """Loads skills keywords from a CSV or Excel file."""

    try:
        if file_type == 'csv':
            skills_df = pd.read_csv(skillset_filepath)
        else:
            skills_df = pd.read_excel(skillset_filepath)
            print("Skill keywords loaded successfully!")
    except Exception as e:
        print(f"Error loading skill keywords: {e}")
        return None

    return skills_df

def create_skill_matcher(nlp, skills_df):
    """Creates a PhraseMatcher for identifying skills in text."""

    matcher = PhraseMatcher(nlp.vocab)
    for column in skills_df.columns:
        skill_patterns = [nlp(text) for text in skills_df[column].dropna()]
        matcher.add(column, None, *skill_patterns)

    return matcher

def extract_skills(text, nlp, matcher):
    """Extracts skills from text using the provided NLP model and matcher."""

    doc = nlp(text)
    matches = matcher(doc)

    extracted_skills = {}
    for match_id, start, end in matches:
        skill_name = nlp.vocab.strings[match_id]
        skill_text = doc[start:end].text
        extracted_skills.setdefault(skill_name, []).append(skill_text)

    return extracted_skills

def main():
    """Main function to process job descriptions and extract skills."""

    nlp = spacy.load('en_core_web_lg')
    skill_keywords_df = load_skill_keywords("../input/Skills_Keywords.xlsx", file_type="excel")
    skill_matcher = create_skill_matcher(nlp, skill_keywords_df)

    job_data = pd.read_json("../input/jobs_jumble.json")
    tqdm.pandas(desc="Traitement en cours")

    job_data['skills'] = job_data['description'].progress_apply(extract_skills, args=(nlp, skill_matcher))
    
    job_data.to_json('../output/jobs_with_skills.json')
    print('Les données ont été enregistrées dans ../output/jobs_with_skills.json')
    
if __name__ == "__main__":
    main()


# In[14]:


data

