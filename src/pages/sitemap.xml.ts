import {siteConfig} from '../data/siteConfig';
import content from '../data/pages.json';
export function GET(){return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+content.pages.filter(p=>!p.slug.startsWith('lp')).map(p=>'<url><loc>'+siteConfig.origin+'/'+(p.slug?p.slug+'/':'')+'</loc></url>').join('')+'</urlset>',{headers:{'Content-Type':'application/xml'}});}
