class PopUpInfo extends HTMLElement {
  constructor() {
    super();
    // 创建一个 shadow root
    var shadow = this.attachShadow({ mode: 'open' });

    // 创建一个 spans
    var wrapper = document.createElement('span');
    wrapper.setAttribute('class', 'wrapper');
    var icon = document.createElement('span');
    icon.setAttribute('class', 'icon');
    icon.setAttribute('tabindex', 0);
    var info = document.createElement('span');
    info.setAttribute('class', 'info');

    // 获取 text 属性上的内容，并添加到一个 span 标签内
    var text = this.getAttribute('text');
    info.textContent = text;

    // 插入 icon
    var imgUrl;
    if (this.hasAttribute('img')) {
      // imgUrl = this.getAttribute('img');
      imgUrl = 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png';
    } else {
      imgUrl = 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png';
    }
    var img = document.createElement('img');
    img.src = imgUrl;
    icon.appendChild(img);

    // 创建一些 CSS，并应用到 shadow dom 上
    var style = document.createElement('style');

    style.textContent = `
      .wrapper {
        position: relative;
      }
      .info {
        font-size: 0.8rem;
        width: 200px;
        display: inline-block;
        border: 1px solid black;
        padding: 10px;
        background: white;
        border-radius: 10px;
        opacity: 0;
        transition: 0.6s all;
        position: absolute;
        bottom: 20px;
        left: 10px;
        z-index: 3;
      }
      img {
        width: 10.2rem;
      }
      .icon:hover + .info, .icon:focus + .info {
        opacity: 1;
      }
    `;

    // 将创建的元素附加到 shadow dom

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);

  }
}

customElements.define('popup-info', PopUpInfo);