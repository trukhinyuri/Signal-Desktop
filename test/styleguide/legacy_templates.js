/* global window: false */

// Taken from background.html.
// Templates are here solely to support the Backbone views rendered in the Style Guide.

// Note: Any change here must be reflected in background.html to be reflected in the app
//   and test/index.html to be reflected in the unit tests.

window.Whisper.View.Templates = {
  hasRetry: `
    {{ messageNotSent }} <span href='#' class='retry'>{{ resend }}</span>
  `,
  'some-failed': `
    {{ someFailed }}
  `,
  keychange: `
    <span class='content' dir='auto'>
      <span class='shield icon'></span> {{ content }}
    </span>
  `,
  'verified-change': `
    <span class='content' dir='auto'>
      <span class='{{ icon }} icon'></span> {{ content }}
    </span>
  `,
  message: `
    {{> avatar }}
    <div class='bubble {{ avatar.color }}'>
        <div class='sender' dir='auto'>
          {{ sender }}
          {{ #profileName }}
            <span class='profileName'>{{ profileName }} </span>
          {{ /profileName }}
        </div>
        <div class='attachments'></div>
        <p class='content' dir='auto'>
          {{ #message }}<span class='body'>{{ message }}</span>{{ /message }}
        </p>
        <div class='meta'>
          <span class='timestamp' data-timestamp={{ timestamp }}></span>
          <span class='status hide'></span>
          <span class='timer'></span>
        </div>
    </div>
  `,
  hourglass: `
    <span class='hourglass'><span class='sand'></span></span>
  `,
  expirationTimerUpdate: `
    <span class='content'><span class='icon clock'></span> {{ content }}</span>
  `,
};
