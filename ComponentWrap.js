enyo.kind({
    name:'ComponentWrap',
    constructor:function(props){
        this.newComponents = props.components;
        this.newOwner = props.owner;
        props.components = [];
        this.inherited(arguments);
    },
    create:function(props){
        this.inherited(arguments);
        if(typeof this.$.wrapper !== 'undefined'
           && typeof this.newComponents === 'object'){
            for(var i = 0;i<this.newComponents.length;i++){
                this.$.wrapper.createComponent(this.newComponents[i],{owner:this.newOwner});
            }
        }
    }
});
