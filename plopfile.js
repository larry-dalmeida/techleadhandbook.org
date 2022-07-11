module.exports = function (plop) {
    plop.setGenerator('handbook entry', {
        description: 'new handbook entry',
        prompts: [{
            type: 'input',
            name: 'id',
            message: 'What is the route ID you would like to use?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of this article?'
        }],
        actions: [{
            type: 'add',
            path: 'content/handbook/{{id}}.md',
            templateFile: 'plop-templates/handbook-entry.hbs'
        }]
    });

    plop.setGenerator('first 90 days entry', {
        description: 'new first 90 days entry',
        prompts: [{
            type: 'input',
            name: 'id',
            message: 'What is the route ID you would like to use?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of this article?'
        }],
        actions: [{
            type: 'add',
            path: 'content/first-90-days-of-being-tech-lead/{{id}}.md',
            templateFile: 'plop-templates/handbook-entry.hbs'
        }]
    });
};