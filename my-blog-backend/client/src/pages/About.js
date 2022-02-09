import React from 'react';
import NavBar from './NavBar';

const About = () => {
    return (
      <>
        <NavBar/>
        <div className='aboutpage'>
           <h1>About Me</h1> 
           <p>It’s not just the specifications that are changing, either. Much has been made of permutations to Google’s algorithms, which are beginning to favor better written, more authoritative content (and making work for the growing content strategy industry). Google’s bots are now charged with asking questions like, “Was the article edited well, or does it appear sloppy or hastily produced?” and “Does this article provide a complete or comprehensive description of the topic?,” the sorts of questions one might expect to be posed by an earnest college professor.
              This increased support for quality writing, allied with the book-like convenience and tactility of smartphones and tablets, means there has never been a better time for reading online. The remaining task is to make the writing itself a joy to read.</p>
          <p>As designers, we are frequently and incorrectly reminded that our job is to “make things pretty.” We are indeed designers — not artists — and there is no place for formalism in good design. Web design has a function, and that function is to communicate the message for which the Web page was conceived. The medium is not the message.
             Never is this principle more pertinent than when dealing with type, the bread and butter of Web-borne communication. A well-set paragraph of text is not supposed to wow the reader; the wowing should be left to the idea or observation for which the paragraph is a vehicle. In fact, the perfect paragraph is unassuming to the point of near invisibility. That is not to say that the appearance of your text should have no appeal at all. On the contrary: well-balanced, comfortably read typography is a thing of beauty; it’s just not the arresting sort of beauty that might distract you from reading.</p>
          <p>
            As a young industry that champions innovation and rates its practitioners based on their ability to apprehend (sorry, “grok”) the continual emergence of new technologies, frameworks, protocols and data models, we are not particularly familiar with tradition. However, the practice of arranging type for optimal pleasure and comfort is a centuries-old discipline. As long ago as 1927, the noted typographer Jan Tschichold spoke of the typesetting “methods and rules upon which it is impossible to improve” — a set of rules it would be foolish to ignore.
            So, please put your canvas element and data visualization API to one side just for a short while. We are about to spend a little time brushing up on our typesetting skills. It’s called “hypertext,” after all.
          </p>
        </div>
        </>
    );
};

export default About;