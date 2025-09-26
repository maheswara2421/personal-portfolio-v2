import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

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

      <a className="email-link" href={`mailto:${email}`}>
        Say Hello
      </a>

      <p className="email-address">
        or email me directly at <a href={`mailto:${email}`}>{email}</a>
      </p>
    </StyledContactSection>
  );
};

export default Contact;
