import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
})
export class AppRoot {
  render() {
    return (
      <main>
        <cookie-section>
          <cookie-logo url="#about"></cookie-logo>
        </cookie-section>
        <cookie-section id="about">
          <cookie-heading>About</cookie-heading>
          <cookie-paragraph>
            Hey 👋, I'm Christian Cook - a front end engineer working at <cookie-link url="https://www.spongelearning.com">Sponge</cookie-link>. I really enjoy building 
            web components which are accessible and versatile, and have a keen interest in building design systems.
          </cookie-paragraph>
        </cookie-section>
        <cookie-section>
          <cookie-heading>Creations</cookie-heading>
          <cookie-list>
            <cookie-list-item>
              <cookie-link url="https://www.xapijs.dev" external={true}>
                xAPI.js: xAPI Wrapper Library
              </cookie-link>
              - a JavaScript library for elearning developers to communicate over the xAPI specification.
            </cookie-list-item>
            <cookie-list-item>
              <cookie-link url="https://www.xapijs.dev/cmi5-profile-library/introduction" external={true}>
                xAPI.js: cmi5 Profile Library
              </cookie-link>
              - a JavaScript library for elearning developers to communicate over the cmi5 specification.
            </cookie-list-item>
            <cookie-list-item>
              <cookie-link url="https://codepen.io/cookiecookson/pen/KKMMYjJ" external={true}>
                Star Wars: Squadrons Loader
              </cookie-link>
              - a small side-project challenge to replicate the loader from the game using CSS.
            </cookie-list-item>
            <cookie-list-item>
              <cookie-link url="https://gist.github.com/CookieCookson/5eb4f0b5e0ba82b28d2a3fd7e157f4bd" external={true}>
                Cookie's Paella 🍪🥘
              </cookie-link>
              - A favoured paella recipe that I have been cooking for my friends for many years.
            </cookie-list-item>
          </cookie-list>
        </cookie-section>
        <cookie-section>
          <cookie-heading>Contact</cookie-heading>
          <cookie-paragraph>
            You can reach me at <cookie-link url="mailto:me@cookie.dev">me@cookie.dev</cookie-link>.
          </cookie-paragraph>
          <cookie-icon-list>
            <cookie-icon-list-item url="https://github.com/CookieCookson" accessible-label="GitHub" icon="github"></cookie-icon-list-item>
            <cookie-icon-list-item url="https://twitter.com/Cookie_Cookson" accessible-label="Twitter" icon="twitter"></cookie-icon-list-item>
            <cookie-icon-list-item url="https://linkedin.com/in/cookchristian" accessible-label="LinkedIn" icon="linkedin"></cookie-icon-list-item>
          </cookie-icon-list>
        </cookie-section>
      </main>
    );
  }
}
