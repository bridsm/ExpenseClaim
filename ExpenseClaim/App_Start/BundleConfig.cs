using System.Web;
using System.Web.Optimization;

namespace ExpenseClaim
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/jquery-ui-{version}.js",
                        "~/Scripts/jquery.multiselect.js",
                        "~/Scripts/jquery.multiselect.filter.js"
                        ));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
               "~/Scripts/angular.js",
               "~/Scripts/angular-route.js",
               "~/Scripts/angular-resource.js",
               "~/Scripts/bootstrap-table.js",
               "~/Scripts/lodash.js",
               "~/Scripts/smart-table.js",
               "~/Scripts/angular-ui/ui-bootstrap-tpls.js",
               "~/Scripts/angular-local-storage.js"
               ));

            bundles.Add(new ScriptBundle("~/bundles/expense-claim-app").Include(
               "~/Scripts/app/app.js",
               "~/Scripts/app/modules/app.prettycash.js"
               ).IncludeDirectory("~/Scripts/app/", "*.js", true));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                           "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/bootstrap-datepicker.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/bootstrap-datepicker.css",
                      "~/Content/jquery-ui.css",
                      "~/Content/jquery.multiselect.css",
                      "~/Content/ui-bootstrap-csp.css",
                      "~/Content/site.css"));
        }
    }
}
