/**
 * Cloudflare Workers script for serving the law firm website
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    
    // Handle root path
    if (path === '/' || path === '') {
      return env.ASSETS.fetch(new Request(url.origin + '/page.html'));
    }
    
    // Handle specific routes
    const routeMap = {
      '/about': '/about/page.html',
      '/cases': '/cases/page.html',
      '/practice-areas': '/practice-areas/page.html',
      '/team': '/team/page.html',
      '/contact': '/contact/page.html',
      '/faqs': '/faqs/page.html',
      '/homev1': '/homev1/page.html'
    };
    
    // Check if it's a known route
    if (routeMap[path]) {
      return env.ASSETS.fetch(new Request(url.origin + routeMap[path]));
    }
    
    // Try to serve the file directly
    try {
      return await env.ASSETS.fetch(request);
    } catch (error) {
      // If file not found, serve 404 page
      return env.ASSETS.fetch(new Request(url.origin + '/404/page.html'));
    }
  }
}; 