import React from 'react'

const Footer = () => {
    return (
        <footer className="Footer">
            <a className="Footer-item" href="#">刘看山</a>
            <span className="Footer-dot"></span>
            <a className="Footer-item" href="#">知乎指南</a>
            <span className="Footer-dot"></span>
            <a className="Footer-item" href="#">知乎协议</a>
            <span className="Footer-dot"></span>
            <a className="Footer-item" href="#">知乎隐私保护指引</a><br />
            <a className="Footer-item" href="#">应用</a>
            <span className="Footer-dot"></span>
            <a className="Footer-item" href="#">工作</a>
            <span className="Footer-dot"></span>
            <button type="button" className="Button OrgCreateButton">申请开通知乎机构号</button><br />
            <a className="Footer-item" href="#">侵权举报</a>
            <span className="Footer-dot"></span>
            <a className="Footer-item" href="#">网上有害信息举报专区</a><br />
            <span className="Footer-item">违法和不良信息举报：010-82716601</span><br />
            <a className="Footer-item" href="#">儿童色情信息举报专区</a><br />
            <a className="Footer-item" href="#">电信与服务业务经营许可证</a><br />
            <a className="Footer-item" href="#">网络文化经营许可证</a><br />
            <a className="Footer-item" href="#">联系我们</a>
            <span> © 2019 知乎</span>
        </footer>
    )
}

export default Footer