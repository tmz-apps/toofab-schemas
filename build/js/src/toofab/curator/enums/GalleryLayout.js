import Enum from '@gdbots/common/Enum';

export default class GalleryLayout extends Enum {
}

GalleryLayout.configure({
  UNKNOWN: 'unknown',
  CAROUSEL: 'carousel',
  LIST: 'list',
}, 'toofab:curator:gallery-layout');
