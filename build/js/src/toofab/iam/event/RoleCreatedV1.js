// @link https://schemas.toofab.com/json-schema/toofab/iam/event/role-created/1-0-0.json#
import GdbotsAnalyticsTrackedMessageV1Mixin from '@gdbots/schemas/gdbots/analytics/mixin/tracked-message/TrackedMessageV1Mixin';
import GdbotsEnrichmentsIpToGeoV1Mixin from '@gdbots/schemas/gdbots/enrichments/mixin/ip-to-geo/IpToGeoV1Mixin';
import GdbotsEnrichmentsTimePartingV1Mixin from '@gdbots/schemas/gdbots/enrichments/mixin/time-parting/TimePartingV1Mixin';
import GdbotsEnrichmentsTimeSamplingV1Mixin from '@gdbots/schemas/gdbots/enrichments/mixin/time-sampling/TimeSamplingV1Mixin';
import GdbotsEnrichmentsUaParserV1Mixin from '@gdbots/schemas/gdbots/enrichments/mixin/ua-parser/UaParserV1Mixin';
import GdbotsNcrNodeCreatedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node-created/NodeCreatedV1Mixin';
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import GdbotsPbjxEventV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class RoleCreatedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:toofab:iam:event:role-created:1-0-0', RoleCreatedV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        GdbotsNcrNodeCreatedV1Mixin.create(),
        GdbotsAnalyticsTrackedMessageV1Mixin.create(),
        GdbotsEnrichmentsIpToGeoV1Mixin.create(),
        GdbotsEnrichmentsTimePartingV1Mixin.create(),
        GdbotsEnrichmentsTimeSamplingV1Mixin.create(),
        GdbotsEnrichmentsUaParserV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxEventV1Trait(RoleCreatedV1);
MessageResolver.register('toofab:iam:event:role-created', RoleCreatedV1);
Object.freeze(RoleCreatedV1);
Object.freeze(RoleCreatedV1.prototype);
