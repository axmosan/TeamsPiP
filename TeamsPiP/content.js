// content.js

const ICON_BASE64 = 'data:image/png;base64,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';

function triggerPiP() {
  const videos = [...document.querySelectorAll('video')];
  const eligible = videos
    .map(v => {
      v.removeAttribute('disablePictureInPicture');
      return v;
    })
    .filter(v => v.clientWidth > 0 && v.clientHeight > 0);

  const largest = eligible.sort((a, b) =>
    (b.clientWidth * b.clientHeight) - (a.clientWidth * a.clientHeight)
  )[0];

  if (largest && document.pictureInPictureEnabled) {
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    } else {
      largest.requestPictureInPicture().catch(err =>
        console.error('PiP failed:', err)
      );
    }
  } else {
    console.warn('No eligible video found for PiP');
  }
}

function observeContextMenu() {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue;

        const menu = node.querySelector('div[role="menu"]');
        if (!menu || menu.querySelector('.pip-menu-item')) continue;

        const menuItem = document.createElement('div');
        menuItem.className = 'fui-MenuItem rfoezjv pip-menu-item';
        menuItem.role = 'menuitem';
        menuItem.tabIndex = 0;

        menuItem.innerHTML = `
          <span class="fui-MenuItem__icon ro9koqv">
            <img src="${ICON_BASE64}" style="width:16px;height:16px;" />
          </span>
          <span class="fui-MenuItem__content r1ls86vo">画面をPiPする</span>
        `;

        menuItem.addEventListener('click', () => triggerPiP());

        menu.appendChild(menuItem);
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

window.addEventListener("load", () => {
  observeContextMenu();
});
