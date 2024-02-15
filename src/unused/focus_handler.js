export default YourComponent;

  const resultsContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollLevel = 200;

      if (resultsContainerRef.current) {
        const isResultsContainerFocused = document.activeElement === resultsContainerRef.current;

        if (window.scrollY > scrollLevel || isResultsContainerFocused) {
          resultsContainerRef.current.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

