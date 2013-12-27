using System.Web;
using System.Web.Optimization;
using TCM.Web.Bundling;

namespace County
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.IncludeDirectory("~/bundles/lib", "~/Scripts/Lib");
            bundles.IncludeDirectory("~/bundles/app", "~/Scripts/App");

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}
