import type { Struct, Schema } from '@strapi/strapi';

export interface SharedVkVideo extends Struct.ComponentSchema {
  collectionName: 'components_shared_vk_videos';
  info: {
    displayName: 'vk-video';
    icon: 'alien';
    description: '';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    thumbnail: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSchedule extends Struct.ComponentSchema {
  collectionName: 'components_shared_schedules';
  info: {
    displayName: 'schedule';
    icon: 'apps';
    description: '';
  };
  attributes: {
    dayAndTime: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Schema.Attribute.String;
    body: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
    description: '';
  };
  attributes: {
    file: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    description: Schema.Attribute.String;
  };
}

export interface SharedEmbeddedVkVideo extends Struct.ComponentSchema {
  collectionName: 'components_shared_embedded_vk_videos';
  info: {
    displayName: 'EmbeddedVkVideo';
  };
  attributes: {
    embeddedLink: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    Button_text: Schema.Attribute.String & Schema.Attribute.Required;
    Button_link: Schema.Attribute.String & Schema.Attribute.Required;
    isExternal: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface SharedAddress extends Struct.ComponentSchema {
  collectionName: 'components_shared_addresses';
  info: {
    displayName: 'address';
    icon: 'earth';
  };
  attributes: {
    city: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041D\u0435\u0432\u0438\u043D\u043D\u043E\u043C\u044B\u0441\u0441\u043A'>;
    street: Schema.Attribute.String & Schema.Attribute.Required;
    building: Schema.Attribute.String;
  };
}

export interface ServicesBlockHeader extends Struct.ComponentSchema {
  collectionName: 'components_services_block_headers';
  info: {
    displayName: 'Header';
    icon: 'wheelchair';
    description: '';
  };
  attributes: {
    Title: Schema.Attribute.String;
    whatDoWeDo: Schema.Attribute.Component<'shared.rich-text', true>;
    howDoWeDo: Schema.Attribute.Component<'shared.rich-text', true>;
    headerPhoto: Schema.Attribute.Component<'shared.media', false>;
    headerVideo: Schema.Attribute.Component<'shared.embedded-vk-video', false>;
  };
}

export interface ServicesBlockCarouselView extends Struct.ComponentSchema {
  collectionName: 'components_services_block_carousel_views';
  info: {
    displayName: 'Carousel_view';
    icon: 'medium';
    description: '';
  };
  attributes: {
    carouselServiceName: Schema.Attribute.String & Schema.Attribute.Required;
    carouselServiceImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    carouselServiceDescription: Schema.Attribute.Text &
      Schema.Attribute.Required;
  };
}

export interface HtbachristianBlockPrayExample extends Struct.ComponentSchema {
  collectionName: 'components_htbachristian_block_pray_examples';
  info: {
    displayName: 'prayExample';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    prayText: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface HistoryGallery extends Struct.ComponentSchema {
  collectionName: 'components_history_galleries';
  info: {
    displayName: 'gallery';
    description: '';
  };
  attributes: {
    photos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ContentBlocksInfoBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_info_blocks';
  info: {
    displayName: 'Info block';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Title: Schema.Attribute.String;
    description: Schema.Attribute.Component<'shared.rich-text', true>;
    Button: Schema.Attribute.Component<'shared.button', false>;
  };
}

export interface ContentBlocksEvent extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_events';
  info: {
    displayName: 'Event';
    icon: 'music';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    date: Schema.Attribute.DateTime & Schema.Attribute.Required;
    Button: Schema.Attribute.Component<'shared.button', false>;
    image: Schema.Attribute.Component<'content-blocks.event-image', false> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    place: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentBlocksEventImage extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_event_images';
  info: {
    displayName: 'EventImage';
    icon: 'alien';
  };
  attributes: {
    isVertical: Schema.Attribute.Boolean;
    eventImage: Schema.Attribute.Media<'files' | 'images'> &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.vk-video': SharedVkVideo;
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.schedule': SharedSchedule;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.media': SharedMedia;
      'shared.embedded-vk-video': SharedEmbeddedVkVideo;
      'shared.button': SharedButton;
      'shared.address': SharedAddress;
      'services-block.header': ServicesBlockHeader;
      'services-block.carousel-view': ServicesBlockCarouselView;
      'htbachristian-block.pray-example': HtbachristianBlockPrayExample;
      'history.gallery': HistoryGallery;
      'content-blocks.info-block': ContentBlocksInfoBlock;
      'content-blocks.event': ContentBlocksEvent;
      'content-blocks.event-image': ContentBlocksEventImage;
    }
  }
}
