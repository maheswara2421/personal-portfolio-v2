import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const email = 'mohanvivek2421@gmail.com';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  .email-address {
    margin-top: 20px;
    font-size: var(--fz-sm);
    color: var(--slate);

    a {
      color: var(--green);
      &:hover {
        text-decoration: underline;
      }
    }

    .email-text {
      font-family: var(--font-mono);
      font-weight: 500;
    }
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    if (sr) {
      sr.reveal(revealContainer.current, srConfig());
    }
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>
        I'm currently looking for new opportunities as a Frontend Developer or Full Stack Engineer.
        Whether you have an exciting project, a job opportunity, or just want to connect, I'd love to hear from you!
      </p>

      <a className="email-link" href={`mailto:${email}?subject=Hello from Portfolio`} title="Send an email to mohanvivek2421@gmail.com">
        Say Hello
      </a>

      <p className="email-address">
        or <a href={`mailto:${email}?subject=Hello from Portfolio`} title="Send an email to mohanvivek2421@gmail.com">email me directly</a> at <span className="email-text">{email}</span>
      </p>
    </StyledContactSection>
  );
};

export default Contact;
