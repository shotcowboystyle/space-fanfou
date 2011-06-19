/* 扩展信息 */

var plugins = [

    /* 页面样式扩展 */

    {
        name: 'font_reset',
        css: 'font_reset.css',
    },
    {
        name: 'translucent_sidebar',
        css: 'translucent_sidebar.css',
    },
    {
        name: 'newstyle_trendlist',
        css: 'newstyle_trendlist.css'
    },
    {
        name: 'logo_remove_beta',
        css: 'logo_remove_beta.css'
    },

    /* 页面功能性扩展 */

    {
        name: 'expanding_replies',
        options: ['number'],
        js: 'expanding_replies.js',
        css: 'expanding_replies.css',
    },
    {
        name: 'image_uploading',
        js: 'image_uploading.js',
        css: 'image_uploading.css',
    },
    {
        name: 'user_switcher',
        js: 'user_switcher.js',
        css: 'user_switcher.css',
    },
    {
        name: 'float_message',
        options: ['noajaxattop'],
        js: 'float_message.js',
        css: 'float_message.css',
    },
    {
        name: 'repost_photo_preview',
        js: 'repost_photo_preview.js',
    },

    /* 其他扩展 */

    {
        name: 'share_to_fanfou',
        type: 'background',
        js: 'share_to_fanfou.js',
    },

];