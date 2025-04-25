const ICON_BASE64 = 'data:image/png;base64,...(略)...'; // ここはそのままでOK

// PiPを開始または終了する関数
function triggerPiP() {
  const videos = [...document.querySelectorAll('video')];
  
  // disablePictureInPictureを削除してからフィルタリング
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
        console.error('⚠️ PiP failed:', err)
      );
    }
  } else {
    console.warn('⚠️ No eligible video found for PiP');
  }
}

// コンテキストメニューに PiP 項目を追加する処理
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

        menuItem.addEventListener('click', triggerPiP);
        menu.appendChild(menuItem);
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

// video要素が動的に追加されたときに属性を削除する監視
function observeVideos() {
  const observer = new MutationObserver(() => {
    document.querySelectorAll('video[disablepictureinpicture]')
      .forEach(video => video.removeAttribute('disablePictureInPicture'));
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

// 初期化処理
document.addEventListener("DOMContentLoaded", () => {
  observeContextMenu();
  observeVideos();

  // ページ内の既存の video にも適用
  document.querySelectorAll('video').forEach(video => {
    video.removeAttribute('disablePictureInPicture');
  });
});
