(function() {

  function anchorLink(id) {
    var div = document.createElement('div');
    div.className = 'heading-anchor';

    if (id) {
      // SVG Icon from: https://octicons.github.com/icon/link/
      div.innerHTML = '<a href="#' + id + '"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><title>link</title><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="#000" fill-rule="evenodd"/></svg></a>'
    }
    return div;
  }

  function renderAnchors() {
    ["h1", "h2", "h3", "h4", "h5"].forEach(function(tagName) {
      Array.from(document.getElementsByTagName(tagName)).forEach(function(headerElem) {
        headerElem.prepend(anchorLink(headerElem.id));
      });
    });
  }

  function printWelcomeMessage() {
    console.log("");
    console.log("✨ Try the SDK in browser! ✨");
    console.log("");
    console.log("The SDK is loaded in window.sharetribeSdk global variable.");
    console.log("");
  }

  function loadKapaWidget() {
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://widget.kapa.ai/kapa-widget.bundle.js';
    script.setAttribute('data-website-id', 'a0adab85-c992-46fc-baf9-f7ee88597390');
    script.setAttribute('data-project-name', 'Sharetribe');
    script.setAttribute('data-project-color', '#181616');
    script.setAttribute('data-project-logo', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqqHt-LCCSvT41C827y-LrXf1etlv8uqUV_g&s');
    script.setAttribute('data-bot-protection-mechanism', 'hcaptcha');
    script.setAttribute('data-modal-override-open-id', 'ask-ai-input');
    script.setAttribute('data-modal-override-open-class', 'search-input');
    script.setAttribute('data-user-analytics-fingerprint-enabled', 'true');
    script.setAttribute('data-modal-title', 'Sharetribe AI Assistant');
    script.setAttribute('data-modal-example-questions-title', 'Try asking me...');
    script.setAttribute('data-modal-disclaimer', 'This **AI assistant answers Sharetribe questions** using our [documentation](https://www.sharetribe.com/docs/), [API reference](https://www.sharetribe.com/api-reference/), [help center](https://www.sharetribe.com/help/en/), [blogs](https://www.sharetribe.com/developer-blog/), [SDK reference](https://sharetribe.github.io/flex-sdk-js/) and [github files](https://github.com/sharetribe/web-template/).');
    script.setAttribute('data-button-text-color', '#FFFFFF');
    script.setAttribute('data-modal-header-bg-color', '#181616');
    script.setAttribute('data-modal-title-color', '#FFFFFF');
    script.setAttribute('data-consent-required', 'true');
    script.setAttribute('data-consent-screen-title', 'Using our AI assistant requires anonymous user tracking');
    script.setAttribute('data-consent-screen-disclaimer', "By clicking 'Allow tracking and use AI assistant', you consent to anonymous user tracking which helps us improve our service. We don't collect any personally identifiable information.");
    script.setAttribute('data-consent-screen-accept-button-text', 'Allow tracking and use AI assistant');
    script.setAttribute('data-consent-screen-reject-button-text', 'No, thanks');
    document.head.appendChild(script);
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Render anchors when page is loaded
    renderAnchors();
    printWelcomeMessage();
    loadKapaWidget();
  }, false);

  document.addEventListener('pjax:success', function() {
    // Render anchors when page is changed
    renderAnchors();
  });

})();
