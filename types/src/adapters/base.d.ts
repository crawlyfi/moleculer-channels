export = BaseAdapter;
/**
 * @typedef {import("moleculer").ServiceBroker} ServiceBroker Moleculer Service Broker instance
 * @typedef {import("moleculer").LoggerInstance} Logger Logger instance
 * @typedef {import("../index").Channel} Channel Base channel definition
 * @typedef {import("../index").DeadLetteringOptions} DeadLetteringOptions Dead-letter-queue options
 */
/**
 * @typedef {Object} BaseDefaultOptions Base Adapter configuration
 * @property {String?} prefix Adapter prefix
 * @property {String} consumerName Name of the consumer
 * @property {String} serializer Type of serializer to use in message exchange. Defaults to JSON
 * @property {Number} maxRetries Maximum number of retries before sending the message to dead-letter-queue or drop
 * @property {Number} maxInFlight Maximum number of messages that can be processed in parallel.
 * @property {DeadLetteringOptions} deadLettering Dead-letter-queue options
 */
declare class BaseAdapter {
    /**
     * Constructor of adapter
     * @param  {Object?} opts
     */
    constructor(opts: any | null);
    /** @type {BaseDefaultOptions} */
    opts: BaseDefaultOptions;
    /**
     * Tracks the messages that are still being processed by different clients
     * @type {Map<string, string[]>}
     */
    activeMessages: Map<string, string[]>;
    /**
     * Initialize the adapter.
     *
     * @param {ServiceBroker} broker
     * @param {Logger} logger
     */
    init(broker: ServiceBroker, logger: Logger): void;
    broker: import("moleculer").ServiceBroker;
    logger: import("moleculer").LoggerInstance;
    Promise: PromiseConstructorLike;
    serializer: import("moleculer").Serializer;
    /**
     * Check the installed client library version.
     * https://github.com/npm/node-semver#usage
     *
     * @param {String} installedVersion
     * @param {String} requiredVersions
     * @returns {Boolean}
     */
    checkClientLibVersion(library: any, requiredVersions: string): boolean;
    /**
     * Init active messages list for tracking messages of a channel
     * @param {string} channelID
     */
    initChannelActiveMessages(channelID: string): void;
    /**
     * Remove active messages list of a channel
     * @param {string} channelID
     */
    stopChannelActiveMessages(channelID: string): void;
    /**
     * Add IDs of the messages that are currently being processed
     *
     * @param {string} channelID Channel ID
     * @param {string[]} IDs List of IDs
     */
    addChannelActiveMessages(channelID: string, IDs: string[]): void;
    /**
     * Remove IDs of the messages that were already processed
     *
     * @param {string} channelID Channel ID
     * @param {string[]} IDs List of IDs
     */
    removeChannelActiveMessages(channelID: string, IDs: string[]): void;
    /**
     * Get the number of active messages of a channel
     *
     * @param {string} channelID Channel ID
     */
    getNumberOfChannelActiveMessages(channelID: string): number;
    /**
     * Get the number of channels
     */
    getNumberOfTrackedChannels(): number;
    /**
     * Given a topic name adds the prefix
     *
     * @param {String} topicName
     * @returns {String} New topic name
     */
    addPrefixTopic(topicName: string): string;
    /**
     * Connect to the adapter.
     */
    connect(): Promise<void>;
    /**
     * Disconnect from adapter
     */
    disconnect(): Promise<void>;
    /**
     * Subscribe to a channel.
     *
     * @param {Channel} chan
     */
    subscribe(chan: Channel): Promise<void>;
    /**
     * Unsubscribe from a channel.
     *
     * @param {Channel} chan
     */
    unsubscribe(chan: Channel): Promise<void>;
    /**
     * Publish a payload to a channel.
     * @param {String} channelName
     * @param {any} payload
     * @param {Object?} opts
     */
    publish(channelName: string, payload: any, opts: any | null): Promise<void>;
}
declare namespace BaseAdapter {
    export { ServiceBroker, Logger, Channel, DeadLetteringOptions, BaseDefaultOptions };
}
/**
 * Base Adapter configuration
 */
type BaseDefaultOptions = {
    /**
     * Adapter prefix
     */
    prefix: string | null;
    /**
     * Name of the consumer
     */
    consumerName: string;
    /**
     * Type of serializer to use in message exchange. Defaults to JSON
     */
    serializer: string;
    /**
     * Maximum number of retries before sending the message to dead-letter-queue or drop
     */
    maxRetries: number;
    /**
     * Maximum number of messages that can be processed in parallel.
     */
    maxInFlight: number;
    /**
     * Dead-letter-queue options
     */
    deadLettering: DeadLetteringOptions;
};
/**
 * Moleculer Service Broker instance
 */
type ServiceBroker = import("moleculer").ServiceBroker;
/**
 * Logger instance
 */
type Logger = import("moleculer").LoggerInstance;
/**
 * Base channel definition
 */
type Channel = import("../index").Channel;
/**
 * Dead-letter-queue options
 */
type DeadLetteringOptions = import("../index").DeadLetteringOptions;
