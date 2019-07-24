// @link https://schemas.toofab.com/json-schema/toofab/curator/command/update-timeline/1-0-0.json#
import GdbotsNcrUpdateNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/update-node/UpdateNodeV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class UpdateTimelineV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:toofab:curator:command:update-timeline:1-0-0', UpdateTimelineV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsNcrUpdateNodeV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(UpdateTimelineV1);
MessageResolver.register('toofab:curator:command:update-timeline', UpdateTimelineV1);
Object.freeze(UpdateTimelineV1);
Object.freeze(UpdateTimelineV1.prototype);
