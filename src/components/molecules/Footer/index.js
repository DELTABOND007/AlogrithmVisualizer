import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        Designed and built with{' '}
        <span className="Footer__Heart">&hearts;</span>Team{' '}
        <a
          href="https://www.linkedin.com/in/ramiz-rahman/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
        </a>
      </section>

      {/* <section className="Footer__Items">
        <a
          href="https://youtu.be/JFjvVmvC3pQ"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
         
        </a> */}
        {/* <a
          href="https://github.com/ramiz-rahman/sort-visualizer"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Code
        </a>
      </section> */}
    </footer>
  );
};

export default Footer;
