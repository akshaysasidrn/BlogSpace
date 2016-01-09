/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
!function(){function e(e){for(var t,n=0,i=0,o=0,a=e.$.rows.length;a>o;o++){t=e.$.rows[o];for(var r,s=n=0,l=t.cells.length;l>s;s++)r=t.cells[s],n+=r.colSpan;n>i&&(i=n)}return i}function t(e){return function(){var t=this.getValue(),t=!!(CKEDITOR.dialog.validate.integer()(t)&&t>0);return t||(alert(e),this.select()),t}}function n(n,a){var r=function(e){return new CKEDITOR.dom.element(e,n.document)},s=n.editable(),l=n.plugins.dialogadvtab;return{title:n.lang.table.title,minWidth:310,minHeight:CKEDITOR.env.ie?310:280,onLoad:function(){var e=this,t=e.getContentElement("advanced","advStyles");t&&t.on("change",function(){var t=this.getStyle("width",""),n=e.getContentElement("info","txtWidth");n&&n.setValue(t,!0),t=this.getStyle("height",""),(n=e.getContentElement("info","txtHeight"))&&n.setValue(t,!0)})},onShow:function(){var e,t=n.getSelection(),i=t.getRanges(),o=this.getContentElement("info","txtRows"),r=this.getContentElement("info","txtCols"),s=this.getContentElement("info","txtWidth"),l=this.getContentElement("info","txtHeight");"tableProperties"==a&&((t=t.getSelectedElement())&&t.is("table")?e=t:0<i.length&&(CKEDITOR.env.webkit&&i[0].shrink(CKEDITOR.NODE_ELEMENT),e=n.elementPath(i[0].getCommonAncestor(!0)).contains("table",1)),this._.selectedElement=e),e?(this.setupContent(e),o&&o.disable(),r&&r.disable()):(o&&o.enable(),r&&r.enable()),s&&s.onChange(),l&&l.onChange()},onOk:function(){var e=n.getSelection(),t=this._.selectedElement&&e.createBookmarks(),i=this._.selectedElement||r("table"),o={};if(this.commitContent(o,i),o.info){if(o=o.info,!this._.selectedElement)for(var a=i.append(r("tbody")),s=parseInt(o.txtRows,10)||0,l=parseInt(o.txtCols,10)||0,c=0;s>c;c++)for(var d=a.append(r("tr")),u=0;l>u;u++)d.append(r("td")).appendBogus();if(s=o.selHeaders,!i.$.tHead&&("row"==s||"both"==s)){for(d=new CKEDITOR.dom.element(i.$.createTHead()),a=i.getElementsByTag("tbody").getItem(0),a=a.getElementsByTag("tr").getItem(0),c=0;c<a.getChildCount();c++)l=a.getChild(c),l.type!=CKEDITOR.NODE_ELEMENT||l.data("cke-bookmark")||(l.renameNode("th"),l.setAttribute("scope","col"));d.append(a.remove())}if(null!==i.$.tHead&&"row"!=s&&"both"!=s){for(d=new CKEDITOR.dom.element(i.$.tHead),a=i.getElementsByTag("tbody").getItem(0),u=a.getFirst();0<d.getChildCount();){for(a=d.getFirst(),c=0;c<a.getChildCount();c++)l=a.getChild(c),l.type==CKEDITOR.NODE_ELEMENT&&(l.renameNode("td"),l.removeAttribute("scope"));a.insertBefore(u)}d.remove()}if(!this.hasColumnHeaders&&("col"==s||"both"==s))for(d=0;d<i.$.rows.length;d++)l=new CKEDITOR.dom.element(i.$.rows[d].cells[0]),l.renameNode("th"),l.setAttribute("scope","row");if(this.hasColumnHeaders&&"col"!=s&&"both"!=s)for(c=0;c<i.$.rows.length;c++)d=new CKEDITOR.dom.element(i.$.rows[c]),"tbody"==d.getParent().getName()&&(l=new CKEDITOR.dom.element(d.$.cells[0]),l.renameNode("td"),l.removeAttribute("scope"));o.txtHeight?i.setStyle("height",o.txtHeight):i.removeStyle("height"),o.txtWidth?i.setStyle("width",o.txtWidth):i.removeStyle("width"),i.getAttribute("style")||i.removeAttribute("style")}if(this._.selectedElement)try{e.selectBookmarks(t)}catch(h){}else n.insertElement(i),setTimeout(function(){var e=new CKEDITOR.dom.element(i.$.rows[0].cells[0]),t=n.createRange();t.moveToPosition(e,CKEDITOR.POSITION_AFTER_START),t.select()},0)},contents:[{id:"info",label:n.lang.table.title,elements:[{type:"hbox",widths:[null,null],styles:["vertical-align:top"],children:[{type:"vbox",padding:0,children:[{type:"text",id:"txtRows","default":3,label:n.lang.table.rows,required:!0,controlStyle:"width:5em",validate:t(n.lang.table.invalidRows),setup:function(e){this.setValue(e.$.rows.length)},commit:o},{type:"text",id:"txtCols","default":2,label:n.lang.table.columns,required:!0,controlStyle:"width:5em",validate:t(n.lang.table.invalidCols),setup:function(t){this.setValue(e(t))},commit:o},{type:"html",html:"&nbsp;"},{type:"select",id:"selHeaders",requiredContent:"th","default":"",label:n.lang.table.headers,items:[[n.lang.table.headersNone,""],[n.lang.table.headersRow,"row"],[n.lang.table.headersColumn,"col"],[n.lang.table.headersBoth,"both"]],setup:function(e){var t=this.getDialog();t.hasColumnHeaders=!0;for(var n=0;n<e.$.rows.length;n++){var i=e.$.rows[n].cells[0];if(i&&"th"!=i.nodeName.toLowerCase()){t.hasColumnHeaders=!1;break}}null!==e.$.tHead?this.setValue(t.hasColumnHeaders?"both":"row"):this.setValue(t.hasColumnHeaders?"col":"")},commit:o},{type:"text",id:"txtBorder",requiredContent:"table[border]","default":n.filter.check("table[border]")?1:0,label:n.lang.table.border,controlStyle:"width:3em",validate:CKEDITOR.dialog.validate.number(n.lang.table.invalidBorder),setup:function(e){this.setValue(e.getAttribute("border")||"")},commit:function(e,t){this.getValue()?t.setAttribute("border",this.getValue()):t.removeAttribute("border")}},{id:"cmbAlign",type:"select",requiredContent:"table[align]","default":"",label:n.lang.common.align,items:[[n.lang.common.notSet,""],[n.lang.common.alignLeft,"left"],[n.lang.common.alignCenter,"center"],[n.lang.common.alignRight,"right"]],setup:function(e){this.setValue(e.getAttribute("align")||"")},commit:function(e,t){this.getValue()?t.setAttribute("align",this.getValue()):t.removeAttribute("align")}}]},{type:"vbox",padding:0,children:[{type:"hbox",widths:["5em"],children:[{type:"text",id:"txtWidth",requiredContent:"table{width}",controlStyle:"width:5em",label:n.lang.common.width,title:n.lang.common.cssLengthTooltip,"default":n.filter.check("table{width}")?500>s.getSize("width")?"100%":500:0,getValue:i,validate:CKEDITOR.dialog.validate.cssLength(n.lang.common.invalidCssLength.replace("%1",n.lang.common.width)),onChange:function(){var e=this.getDialog().getContentElement("advanced","advStyles");e&&e.updateStyle("width",this.getValue())},setup:function(e){e=e.getStyle("width"),this.setValue(e)},commit:o}]},{type:"hbox",widths:["5em"],children:[{type:"text",id:"txtHeight",requiredContent:"table{height}",controlStyle:"width:5em",label:n.lang.common.height,title:n.lang.common.cssLengthTooltip,"default":"",getValue:i,validate:CKEDITOR.dialog.validate.cssLength(n.lang.common.invalidCssLength.replace("%1",n.lang.common.height)),onChange:function(){var e=this.getDialog().getContentElement("advanced","advStyles");e&&e.updateStyle("height",this.getValue())},setup:function(e){(e=e.getStyle("height"))&&this.setValue(e)},commit:o}]},{type:"html",html:"&nbsp;"},{type:"text",id:"txtCellSpace",requiredContent:"table[cellspacing]",controlStyle:"width:3em",label:n.lang.table.cellSpace,"default":n.filter.check("table[cellspacing]")?1:0,validate:CKEDITOR.dialog.validate.number(n.lang.table.invalidCellSpacing),setup:function(e){this.setValue(e.getAttribute("cellSpacing")||"")},commit:function(e,t){this.getValue()?t.setAttribute("cellSpacing",this.getValue()):t.removeAttribute("cellSpacing")}},{type:"text",id:"txtCellPad",requiredContent:"table[cellpadding]",controlStyle:"width:3em",label:n.lang.table.cellPad,"default":n.filter.check("table[cellpadding]")?1:0,validate:CKEDITOR.dialog.validate.number(n.lang.table.invalidCellPadding),setup:function(e){this.setValue(e.getAttribute("cellPadding")||"")},commit:function(e,t){this.getValue()?t.setAttribute("cellPadding",this.getValue()):t.removeAttribute("cellPadding")}}]}]},{type:"html",align:"right",html:""},{type:"vbox",padding:0,children:[{type:"text",id:"txtCaption",requiredContent:"caption",label:n.lang.table.caption,setup:function(e){if(this.enable(),e=e.getElementsByTag("caption"),0<e.count()){e=e.getItem(0);var t=e.getFirst(CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT));t&&!t.equals(e.getBogus())?(this.disable(),this.setValue(e.getText())):(e=CKEDITOR.tools.trim(e.getText()),this.setValue(e))}},commit:function(e,t){if(this.isEnabled()){var i=this.getValue(),o=t.getElementsByTag("caption");if(i)0<o.count()?(o=o.getItem(0),o.setHtml("")):(o=new CKEDITOR.dom.element("caption",n.document),t.getChildCount()?o.insertBefore(t.getFirst()):o.appendTo(t)),o.append(new CKEDITOR.dom.text(i,n.document));else if(0<o.count())for(i=o.count()-1;i>=0;i--)o.getItem(i).remove()}}},{type:"text",id:"txtSummary",bidi:!0,requiredContent:"table[summary]",label:n.lang.table.summary,setup:function(e){this.setValue(e.getAttribute("summary")||"")},commit:function(e,t){this.getValue()?t.setAttribute("summary",this.getValue()):t.removeAttribute("summary")}}]}]},l&&l.createAdvancedTab(n,null,"table")]}}var i=CKEDITOR.tools.cssLength,o=function(e){var t=this.id;e.info||(e.info={}),e.info[t]=this.getValue()};CKEDITOR.dialog.add("table",function(e){return n(e,"table")}),CKEDITOR.dialog.add("tableProperties",function(e){return n(e,"tableProperties")})}();