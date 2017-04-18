/* module-key = 'com.atlassian.administration.atlassian-admin-quicksearch-jira:admin-quicksearch-webresources', location = 'com/atlassian/administration/quicksearch/jira/js/adminQuickNav.js' */
/**
 * Shifter group for admin search
 */
JIRA.Shifter && JIRA.Shifter.register(function() {
    var suggestionsDeferred = jQuery.Deferred();

    function formatItem(item) {
        return {
            label: item.label,
            value: item.linkUrl,
            keywords: item.aliases
        };
    }

    function getItemsInSection(section) {
        return _.map(section.items, formatItem).concat(_.map(section.sections, getItemsInSection));
    }

    function formatResponse(data) {
        return _.flatten(getItemsInSection(data));
    }

    JIRA.SmartAjax.makeRequest({
        dataType: 'json',
        url: AJS.contextPath() + '/rest/adminquicksearch/latest/links/default'
    })
    .pipe(formatResponse)
    .done(function(suggestions) {
        suggestionsDeferred.resolve(suggestions);
    })
    .fail(function() {
        suggestionsDeferred.reject();
    });

    return {
        id: 'admin',
        name: "Administration",
        weight: 500,
        getSuggestions: function() {
            return suggestionsDeferred;
        },
        onSelection: function(value) {
            window.location = value;
            return jQuery.Deferred();
        }
    };
});

