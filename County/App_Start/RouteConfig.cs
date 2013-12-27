using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace County
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: null,
                url: "views/{controller}/{action}"
            );

            routes.MapRoute(
                name: null,
                url: "{*path}",
                defaults: new { controller = "Main", action = "Layout" }
            );
        }
    }
}
