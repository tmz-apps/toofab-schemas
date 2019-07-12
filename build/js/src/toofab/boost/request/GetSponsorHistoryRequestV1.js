// @link https://schemas.toofab.com/json-schema/toofab/boost/request/get-sponsor-history-request/1-0-0.json#
import GdbotsPbjxGetEventsRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/get-events-request/GetEventsRequestV1Mixin';
import GdbotsPbjxRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Mixin';
import GdbotsPbjxRequestV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class GetSponsorHistoryRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:toofab:boost:request:get-sponsor-history-request:1-0-0', GetSponsorHistoryRequestV1,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        GdbotsPbjxGetEventsRequestV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxRequestV1Trait(GetSponsorHistoryRequestV1);
MessageResolver.register('toofab:boost:request:get-sponsor-history-request', GetSponsorHistoryRequestV1);
Object.freeze(GetSponsorHistoryRequestV1);
Object.freeze(GetSponsorHistoryRequestV1.prototype);
