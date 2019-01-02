using System;
//using System.IO;
//using RazorEngine;using RazorEngine.Templating;


namespace EasyMoolah.Notification
{
    public class Email
    {
        /// <summary>
        /// Generate an HTML document from the specified Razor template and model.
        /// </summary>
        /// <param name="rootpath">The path to the folder containing the Razor templates</param>
        /// <param name="templatename">The name of the Razor template (.cshtml)</param>
        /// <param name="templatekey">The template key used for caching Razor templates which is essential for improved performance</param>
        /// <param name="model">The model containing the information to be supplied to the Razor template</param>
        /// <returns></returns>
        /// https://medium.com/@DomBurf/templated-html-emails-using-razorengine-6f150bb5f3a6
        public string RunCompile(string rootpath, string templatename, string templatekey, object model)
        {
            //string result = string.Empty;

            //if (string.IsNullOrEmpty(rootpath) || string.IsNullOrEmpty(templatename) || model == null) return result;

            //string templateFilePath = Path.Combine(rootpath, templatename);

            //if (File.Exists(templateFilePath))
            //{
            //    string template = File.ReadAllText(templateFilePath);

            //    if (string.IsNullOrEmpty(templatekey))
            //    {
            //        templatekey = Guid.NewGuid().ToString();
            //    }
            //    result = Engine.Razor.RunCompile(template, templatekey, null, model);
            //}
            return null;
        }

    }
}
