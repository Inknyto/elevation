import os
import time
print(time())
def savior(file):
    if not os.path.exists(f'{file}.bak'):
        os.system(f'mv {file} {file}.bak')
    else:
        savior(f'{file}.bak')
