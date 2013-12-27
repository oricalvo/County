﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace County.Controllers
{
    public class MainController : Controller
    {
        public ActionResult Layout()
        {
            return View();
        }

        public ActionResult Home()
        {
            return View();
        }

        public ActionResult SiteMenu()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}