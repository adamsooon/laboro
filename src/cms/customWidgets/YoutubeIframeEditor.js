const YoutubeIframeEditor = {
  id: "youtube",
  label: "Youtube",
  fields: [{ name: "id", label: "Youtube Video ID", widget: "string" }],
  pattern: /^<iframe src="\/\/www.youtube.com\/embed\/(.*)" class="content-youtube" frameborder="0" allowfullscreen><\/iframe>/,
  fromBlock: function (match) {
    console.log(match);
    return {
      id: match[1],
    };
  },
  toBlock: function (obj) {
    return `<iframe src="//www.youtube.com/embed/${obj.id}" class="content-youtube" frameborder="0" allowfullscreen></iframe>`;
  },
  toPreview: function (obj) {
    return `<iframe src="//www.youtube.com/embed/${obj.id}" class="content-youtube" frameborder="0" allowfullscreen></iframe>`;
  },
};

export default YoutubeIframeEditor;
