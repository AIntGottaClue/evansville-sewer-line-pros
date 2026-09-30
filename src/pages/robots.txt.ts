import {siteConfig} from '../data/siteConfig';
export function GET(){return new Response('User-agent: *\nAllow: /\nDisallow: /lp/\nSitemap: '+siteConfig.origin+'/sitemap.xml\n',{headers:{'Content-Type':'text/plain'}});}
