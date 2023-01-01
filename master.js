function loadJavascriptFiles() {
    $.getScript("https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.5/jquery.validate.min.js");
    $.getScript("https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.2/js/bootstrap.bundle.min.js");
    // $.getScript("https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js");
}

function hideAllTables() {
    $("#WorkExperience").hide();
    $("#Skills").hide();
    $("#Publications").hide();
    $("#Certifications").hide();
    $("#Projects").hide();
}

function handleNavigationClick(TabLink, Div) {
    $(TabLink).click(function () {
        hideAllTables();
        $(Div).show();
        if ($(window).width() <= 450)
            window.location.href = "#Navigation";
    });
}

function handleNavigationTabs() {
    $('button[name="tab"]').click(function () {
        $('button[name="tab"]').removeClass("navigation-tabs-selected");
        $('button[name="tab"]').addClass("navigation-tabs");
        $(this).removeClass("navigation-tabs");
        $(this).addClass("navigation-tabs-selected");
    });

    handleNavigationClick('#WorkExperienceTab', '#WorkExperience');
    handleNavigationClick('#SkillsTab', '#Skills');
    handleNavigationClick('#PublicationsTab', '#Publications');
    handleNavigationClick('#CertificationsTab', '#Certifications');
    handleNavigationClick('#ProjectsTab', '#Projects');
}

function showDefaultTabOnPageLoad(defaultTabLink, defaultTab) {
    $(defaultTabLink).removeClass("navigation-tabs");
    $(defaultTabLink).addClass("navigation-tabs-selected");
    $(defaultTab).show();
}

$(document).ready(function () {
    loadJavascriptFiles();
    hideAllTables();
    handleNavigationTabs();
    showDefaultTabOnPageLoad('#WorkExperienceTab', '#WorkExperience');
});