const smartgrid = require('smart-grid');
const settings = {
    outputStyle: 'styl',
    columns: 12,
    offset: '20px',
    container: {
        maxWidth: '1140px',
        fields: '20px'
    },
    breakPoints: {
        md: {
            width: '992px',
            fields: '20px'
        },
        sm: {
            width: '768px',
            fields: '10px'
        },
        xs: {
            width: '576px',
            fields: '5px'
        },
        xxs: {
            width: '425px',
            fields: '5px'
        }
    },
    oldSizeStyle: false,
    properties: [
        'justify-content'
    ]
};
smartgrid('./markup/static/stylus/libraries', settings);
