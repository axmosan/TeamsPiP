# TeamsPiP
Microsoft TeamsでPicture in Pictureを可能にするChrome拡張機能です。
通話相手がカメラか画面共有を行った際にPiPを行うことができます。


# 導入方法
![image](https://github.com/user-attachments/assets/01d1be25-e68d-4db8-8726-9344eb6665d1)
Chromeの拡張機能から**デベロッパーモードを有効**にして**パッケージ化されていない拡張機能を読み込む**を選択してください。

Releaseから最新のTeamsPiPをダウンロードして、zipを解凍したものをそのまま読み込ませてください。

<pre lang="markdown"> ``` 
  TeamsPiP
    │  background.js
    │  content.js
    │  manifest.json
    │  style.css
    │
    └─icons
            icon128.png
            icon16.png
            icon48.png 
  ``` </pre>

![image](https://github.com/user-attachments/assets/fb96eeb3-73d5-49c0-a8a4-53c9ec4b6f36)
Teams会議を開始した時、・・・や画面を右クリックしたときに「画面をPiPする」という項目が出ていれば導入できています。


# どうやってPiPしているのか
元々Teams会議には`<video>`タグに`<video disablePictureInPicture ...></video>`でPiPを無効にする対策がされています。

なので通常の`video.requestPictureInPicture()`を行ってもPiPはできません。

このこのExtensionの動作で`v.removeAttribute('disablePictureInPicture');`でTeamsの`<video>`要素から`disablePictureInPicture`を取り除いています。


# 免責条項
この拡張機能は、Microsoft Teams（Web版）での利便性を向上させる目的で作成された非公式のChrome拡張機能です。

- 本ソフトウェアは **現状のまま** 提供されており、機能性・安定性・互換性について一切の保証を行いません。
- 拡張機能は **Microsoft Teams の DOM 構造を直接操作**するため、今後の仕様変更によって正常に動作しなくなる可能性があります。
- **Microsoft Corporation は本拡張機能に一切関与しておらず、いかなる保証・責任も負いません。**
- この拡張機能の使用は自己責任で行ってください。使用によって発生したいかなる損害や不具合についても、作者は責任を負いません。
- このツールは **個人または学習目的に限っての使用** を意図しており、商用利用・企業環境での導入は推奨されません。

ご利用に際しては、上記の内容に同意されたものとみなします。

