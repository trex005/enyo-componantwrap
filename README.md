enyo-componantwrap
==================

An inheritable kind for enyo.js that will allow you to wrap the callers defined components in the your kind's own components

To designate in which of your components you want the caller's defined components embedded, name it "wrapper"

```javascript
enyo.kind({
  name:'myNewKind',
  kind:'ComponentWrap',
  components:[
    {
      style:'background-color:red;padding:10px;',
      components:[
        {
          style:'background-color:blue;padding:10px;',
          name:'wrapper'
        }
      ]
    }
  ]
});
var componentWrapSample = new myNewKind({
  components:[
        {
          style:'background-color:green;padding:10px;',
          name:'wrapper'
        }
      ]
    }
);
componentWrapSample.renderInto(document.body);
```
See this sample in action at jsfiddle : http://jsfiddle.net/trex005/JL653/
