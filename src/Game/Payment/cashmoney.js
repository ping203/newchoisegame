var CashMoney = BaseLayer.extend(
    {
        ctor: function () {
            this._super();
            return true;
        },
        customizeGUI: function () {
            cc.log("CashMoney");
            this.createLayout(this,"pn_cashmoney",cc.p(640,370),null,cc.size(1280,720),false);
            this.createText(this.pn_cashmoney, "lb_1", cc.p(640, 467), "Chức năng sẽ được mở trong thời gian tới!", fontTahoma.fontName, 21);
        },

        onEnter: function(){
            this._super();

        },
    }
)

