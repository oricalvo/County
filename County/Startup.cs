using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(County.Startup))]
namespace County
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
