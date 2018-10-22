<div id="meses" style="overflow:auto" class="divTable col-xs-12"></div>

<div id="birthdays-container"  class="divTable col-xs-12">
    <!--my template will be added here-->
</div>

<iframe src="https://metatronltda-my.sharepoint.com/Person.aspx" style="display: none"></iframe>
<!--get the plugins I need -->
<script type="text/javascript" src="https://metatronltda.sharepoint.com/sites/intranetplus/elevaTeste/scripts/plugins/moment.2.1.0.min.js"></script>
<script type="text/javascript" src="https://metatronltda.sharepoint.com/sites/intranetplus/elevaTeste/scripts/plugins/handlebars.1.0.0.js"></script>
<script type="text/javascript" src="https://metatronltda.sharepoint.com/sites/intranetplus/elevaTeste/scripts/plugins/jquery.qtip.min.js"></script>
<script type="text/javascript" src="https://metatronltda.sharepoint.com/sites/intranetplus/elevaTeste/scripts/plugins/jLinq-2.2.1.js"></script>
<script language='javascript' type='text/javascript' src="https://metatronltda.sharepoint.com/sites/intranetplus/elevaTeste/scripts/plugins/LINQ_JS.js"></script>

<!--get the custom scripts I need -->
<script type="text/javascript" src="https://metatronltda.sharepoint.com/sites/intranetplus/elevaTeste/scripts/HandlebarHelpers.js"></script>
<script type="text/javascript" src="https://metatronltda.sharepoint.com/sites/intranetplus/elevaTeste/scripts/Utility.js"></script>
<script type="text/javascript" src="https://metatronltda.sharepoint.com/sites/intranetplus/elevaTeste/scripts/Birthdays.js"></script>
<script type="text/javascript" src="https://metatronltda.sharepoint.com/sites/intranetplus/elevaTeste/scripts/Search.js"></script>
<script type="text/javascript" src="https://metatronltda.sharepoint.com/sites/intranetplus/elevaTeste/scripts/sortBy.js"></script>
<!--css-->
<link href="https://metatronltda.sharepoint.com/sites/intranetplus/elevaTeste/Content/css/elevaInterno.css" rel="stylesheet" type="text/css">
<link href="https://metatronltda.sharepoint.com/sites/intranetplus/elevaTeste/content/css/jquery.qtip.css" rel="stylesheet">

<!--Initialize my js object here to get data and bind template-->
<script type="text/javascript">

    $(document).ready(
        function () {

            var mesAtual = moment();

            var divMeses = $("#meses");

            $(divMeses).append("<div class='divRow'></div>");

            for (mes in Meses) {

                var row = $(divMeses).find("div.divRow");

                $(row).append("<div class='divColumn'><a id='" + Meses[mes] + "' href='#'>" + mes + "</a></div>");

                //var link = $j(divMeses).find("div.divColumn:last a");

                //if (mesAtual.month() == $j(link).attr("id")) {
                //    $j(link).addClass("mesAtivo");
                //}
            }

            $(divMeses).find("div.divRow").prepend("<div class='divColumn'><a id='' href='#' class='mesAtivo'>Próximos</a></div>");

            var link = $("#meses div.divColumn a:first");
            CarregaAniversariantes(link);

            $(document).on("click", "#meses a", function (event) {

                event.preventDefault();

                RemoveClassAttribute($("#meses div.divColumn a"), "mesAtivo");
                $(this).addClass("mesAtivo");
                CarregaAniversariantes($(this));
            });
        }
    );

    function CarregaAniversariantes(obj) {

        var searchControl = null;

        if ($(obj).attr("id") == "") {

            searchControl = new SearchControl({
                siteUrl: 'https://metatronltda.sharepoint.com/sites/intranetplus/elevaTeste/',
                containerId: 'birthdays-container', //the div I want my template rendered in
                templateUrl: 'templates/Aniversariantes/Principal_2.aspx', //site relative url of events.aspx
                templateId: 'aniversariantes-principal_2-template', //matches the ID of the script tag in events.aspx
                NumberRecordsRetrieve: 10,
                feature: 'aniversariantes',
                SelectProperties: ['PreferredName',
                                   'AccountName',
                                   'Birthday',
                                   'WorkPhone',
                                   'WorkEmail',
                                   'PictureURL',
                                   'Path']
            });

        } else {

            searchControl = new SearchControl({
                siteUrl: 'https://metatronltda.sharepoint.com/sites/intranetplus/elevaTeste/',
                containerId: 'birthdays-container', //the div I want my template rendered in
                templateUrl: 'templates/Aniversariantes/Interna.aspx', //site relative url of events.aspx
                templateId: 'aniversariantes-interna-template', //matches the ID of the script tag in events.aspx
                searchCriteria: $(obj).attr("id"),
                feature: 'aniversariantes',
                SelectProperties: ['PreferredName',
                                   'AccountName',
                                   'Birthday',
                                   'WorkPhone',
                                   'WorkEmail',
                                   'PictureURL',
                                   'Path'],
            });

        }
        searchControl.init();

    }
    function RemoveClassAttribute(arrObj, ClassName) {
        $(arrObj).each(
            function () {
                if ($(this).hasClass(ClassName)) {
                    $(this).removeClass(ClassName);
                }
            }
        );
    }

</script>
