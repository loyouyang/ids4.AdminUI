﻿using IdentityModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Filters;
using QuickstartIdentityServer.DBManager;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Security.Claims;
using System.Threading.Tasks;

namespace QuickstartIdentityServer.IdsAuthorization
{
    public class IdsAuthPermissionHandler : AuthorizationHandler<IdsAuthPermissionHandler> ,IAuthorizationRequirement
    {
        private readonly string SystemTag;
        private const string userinfo = "userinfo";
        public IdsAuthPermissionHandler(string sysTag)
        {
            this.SystemTag = sysTag;
        }
        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, IdsAuthPermissionHandler requirement)
        {
            var filterContext = context.Resource as AuthorizationFilterContext;
            var controllerContext = (filterContext.ActionDescriptor as ControllerActionDescriptor) ;

            var db = filterContext.HttpContext.RequestServices.GetService(typeof(PermissionConext)) as PermissionConext;
            var userid = context.User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier).Value;
            //var role = context.User.Claims.FirstOrDefault(c => c.Type == JwtClaimTypes.Role).Value;

            //var attr = methodInfo.GetCustomAttribute<QKAuthAttribute>();

            //var appstr = context.User.Claims.FirstOrDefault(c=>c.Type == userinfo);
            //if(appstr==null) return Task.CompletedTask;

            //var app = TokenUser.Parser.ParseFrom(Convert.FromBase64String(appstr.Value))?.Apps.FirstOrDefault(a=>a.SystemTag == SystemTag);
            //if (app == null) return Task.CompletedTask;

            //var menu = app.Menus.FirstOrDefault(m => m.MenuCode == attr.menucode);
            //if (menu == null) return Task.CompletedTask;

            //if (!menu.BtnCodes.Contains(attr.btncode)) return Task.CompletedTask;

            context.Succeed(requirement);
            return Task.CompletedTask;
        }
       
    }
}
