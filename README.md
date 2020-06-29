## Presenta Markdown Module

This is a plugin of Presenta Lib.
It's a module that extends the capability of the `text` Block adding the markdown conversion.

### Install

Include the module in your project


### Usage

You need to activate the module in your Presenta config object using `markdown:true` in the `modules` field, such as:

```js
new Presenta('#myDiv', {
    modules:{
        markdown:true
    },
    scenes:[...]
})
```


### Options

No options for this module