// 拡張機能アイコン押下でネイティブPiP開始
chrome.action.onClicked.addListener(tab => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        const vids = document.querySelectorAll('video');
        // 面積が最大のvideoを選択
        let max = 0, target = null;
        vids.forEach(v => {
          const area = v.clientWidth * v.clientHeight;
          if (area > max) { max = area; target = v; }
        });
        if (!target || !document.pictureInPictureEnabled) return;
        if (document.pictureInPictureElement) document.exitPictureInPicture();
        else target.requestPictureInPicture();
      }
    });
  });