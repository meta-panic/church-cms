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
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedEmbeddedVideo extends Struct.ComponentSchema {
  collectionName: 'components_shared_embedded_videos';
  info: {
    displayName: 'Embedded video';
    icon: 'alien';
    description: '';
  };
  attributes: {};
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    Button_text: Schema.Attribute.String;
    Button_link: Schema.Attribute.String;
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
  };
  attributes: {
    Title: Schema.Attribute.String;
    What_do_we_do: Schema.Attribute.Component<'shared.rich-text', true>;
    How_do_we_do: Schema.Attribute.Component<'shared.rich-text', true>;
  };
}

export interface ServicesBlockCarouselView extends Struct.ComponentSchema {
  collectionName: 'components_services_block_carousel_views';
  info: {
    displayName: 'Carousel_view';
    icon: 'medium';
  };
  attributes: {
    Carousel_service_name: Schema.Attribute.String & Schema.Attribute.Required;
    Carousel_service_image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Carousel_service_description: Schema.Attribute.Text &
      Schema.Attribute.Required;
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
    Video_link: Schema.Attribute.Component<'shared.embedded-video', false>;
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
    Title: Schema.Attribute.String & Schema.Attribute.Required;
    Date: Schema.Attribute.DateTime & Schema.Attribute.Required;
    Description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Button: Schema.Attribute.Component<'shared.button', false>;
    Photo: Schema.Attribute.Component<'shared.media', false>;
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
      'shared.embedded-video': SharedEmbeddedVideo;
      'shared.button': SharedButton;
      'shared.address': SharedAddress;
      'services-block.header': ServicesBlockHeader;
      'services-block.carousel-view': ServicesBlockCarouselView;
      'content-blocks.info-block': ContentBlocksInfoBlock;
      'content-blocks.event': ContentBlocksEvent;
    }
  }
}
