import CMS from 'netlify-cms-app'
import { pl } from "netlify-cms-locales";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import moment from 'moment';
import 'moment/locale/pl';

const data = moment.localeData()
let locale = {}
Object.keys(data).forEach(key => {
    const value = data[key]
    if (key.startsWith('_')) {
        key = key.substring(1)
    }
    locale[key] = value
})
CMS.moment.locale('pl', locale)

CMS.registerLocale("pl", pl);
CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
