<?php

namespace Toofab\Schemas\Curator\Enum;

use Gdbots\Common\Enum;

/**
 * @method static GalleryLayout UNKNOWN()
 * @method static GalleryLayout CAROUSEL()
 * @method static GalleryLayout LIST()
 */
final class GalleryLayout extends Enum
{
    const UNKNOWN = 'unknown';
    const CAROUSEL = 'carousel';
    const LIST = 'list';
}
