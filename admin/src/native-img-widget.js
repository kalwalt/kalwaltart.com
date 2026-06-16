CMS.registerEditorComponent({
  // Internal id of the component
  id: "figure",
  // Visible label
  label: "Figure",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {name: 'name', label: 'ImageName', widget: 'string'},
    {name: 'webp_id', label: 'Webp_id', widget: 'string'},
    {name: 'jpg_id', label: 'Jpg_id', widget: 'string'},
    {name: 'link', label: 'Link', widget: 'string'},
    {name: 'target', label: 'Target window', widget: 'select',
    options: [{label: 'blank', value: '_blank'},
             {label: 'self', value: '_self'},
             {label: 'parent', value: '_parent'},
             {label: 'top', value: '_top'}]
    },
    {name: 'rel', label: 'Rel (optional if link set)', widget: 'string', default: 'author'},
    {name: 'alt', label: 'Image alternate text', widget: 'string'},
    {name: 'title', label: 'Figure title', widget: 'string'},
    {name: 'caption', label: 'Figure caption', widget: 'string'},
    {name: 'className', label: 'HTML Css class', widget: 'string'},
    {name: 'height', label: 'Image height', widget: 'number', min: 1},
    {name: 'width', label: 'Image width', widget: 'string', min: 1},
    {name: 'attr', label: 'Figure attribution text', widget: 'string'},
    {name: 'attrlink', label: 'Figure attribution link', widget: 'string'}
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /^{% include figure.html (.*?) %}$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(matchIn) {
    var match = matchIn[1].match(/(?:(\b\w+\b)\s*=\s*("[^"]*"|'[^']*'|[^"'<>\s]+)\s*)/g);
    let results = {};
    for (i=0; i < match.length; i++) {
      const pair = match[i].match(/(\b\w+\b)\s*=\s*("[^"]*"|'[^']*'|[^"'<>\s]+)\s*/);
      results[pair[1]] = pair[2].replace(/['"]+/g,'');
    }
    return results;
  },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    let results = '{% include figure.html ';
    Object.keys(obj).forEach((e) => {
      results += `${e}="${obj[e]}" `;
    });
    results += '%}';
    return results;
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    return (
      `
      <figure>
        <h3>${obj.title || ''}</h3>
        <a href="${obj.link || ''}" rel="${obj.rel || ''}" target="${obj.target || ''}">
          <img src="https://ucarecdn.com/${obj.jpg_id}/${obj.name}.jpg" alt="${obj.alt || ''}" width="${obj.width}" height="${obj.height}" loading="lazy" />
        </a>
        <figcaption>
          <h4 class="${obj.className}">${obj.caption || ''}</h4>
        </figcaption>
        <small><a href="${obj.attrlink || ''}">${obj.attr || ''}</a></small>
      </figure>
      `
    );
  }
});
