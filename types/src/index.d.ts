declare const _exports: ((mwOpts: MiddlewareOptions) => {
    name: string;
    /**
     * Create lifecycle hook of service
     * @param {ServiceBroker} _broker
     */
    created(_broker: ServiceBroker): void;
    /**
     * Created lifecycle hook of service
     *
     * @param {Service} svc
     */
    serviceCreated(svc: Service): Promise<void>;
    /**
     * Service stopping lifecycle hook.
     * Need to unsubscribe from the channels.
     *
     * @param {Service} svc
     */
    serviceStopping(svc: Service): Promise<void>;
    /**
     * Start lifecycle hook of service
     */
    started(): Promise<void>;
    /**
     * Stop lifecycle hook of service
     */
    stopped(): Promise<void>;
}) | ((mwOpts: any) => {
    name: string;
    /**
     * Create lifecycle hook of service
     * @param {ServiceBroker} _broker
     */
    created(_broker: ServiceBroker): void;
    /**
     * Created lifecycle hook of service
     *
     * @param {Service} svc
     */
    serviceCreated(svc: Service): Promise<void>;
    /**
     * Service stopping lifecycle hook.
     * Need to unsubscribe from the channels.
     *
     * @param {Service} svc
     */
    serviceStopping(svc: Service): Promise<void>;
    /**
     * Start lifecycle hook of service
     */
    started(): Promise<void>;
    /**
     * Stop lifecycle hook of service
     */
    stopped(): Promise<void>;
});
export = _exports;
/**
 * Moleculer Service Broker instance
 */
export type ServiceBroker = import("moleculer").ServiceBroker;
/**
 * Logger instance
 */
export type Logger = import("moleculer").LoggerInstance;
/**
 * Moleculer service
 */
export type Service = import("moleculer").Service;
/**
 * Moleculer middleware
 */
export type Middleware = import("moleculer").Middleware;
/**
 * Base adapter class
 */
export type BaseAdapter = import("./adapters/base");
/**
 * Dead-letter-queue options
 */
export type DeadLetteringOptions = {
    /**
     * Enable dead-letter-queue
     */
    enabled: boolean;
    /**
     * Name of the dead-letter queue
     */
    queueName: string;
    /**
     * Name of the dead-letter exchange (only for AMQP adapter)
     */
    exchangeName: string;
    /**
     * Options for the dead-letter exchange (only for AMQP adapter)
     */
    exchangeOptions: any;
    /**
     * Options for the dead-letter queue (only for AMQP adapter)
     */
    queueOptions: any;
};
/**
 * Custom Dead-letter-queue options
 */
export type CustomDeadLetteringOptions = {
    /**
     * Enable dead-letter-queue
     */
    enabled: boolean;
    /**
     * Enable dead-letter-queue
     */
    function: Function;
};
/**
 * Base consumer configuration
 */
export type Channel = {
    /**
     * Consumer ID
     */
    id: string;
    /**
     * Channel/Queue/Stream name
     */
    name: string;
    /**
     * Consumer group name
     */
    group: string;
    /**
     * Create Moleculer Context
     */
    context: boolean;
    /**
     * Flag denoting if service is stopping
     */
    unsubscribing: boolean;
    /**
     * Maximum number of messages that can be processed simultaneously
     */
    maxInFlight: number | null;
    /**
     * Maximum number of retries before sending the message to dead-letter-queue
     */
    maxRetries: number;
    /**
     * Dead-letter-queue options
     */
    deadLettering: DeadLetteringOptions | null;
    /**
     * Custom Dead-letter-queue options
     */
    customDeadLettering: CustomDeadLetteringOptions | null;
    /**
     * User defined handler
     */
    handler: Function;
    /**
     * User defined handler
     */
    params: any;
};
/**
 * Registry entry
 */
export type ChannelRegistryEntry = {
    /**
     * Service instance class
     */
    svc: Service;
    /**
     * Channel name
     */
    name: string;
    /**
     * Channel object
     */
    chan: Channel;
};
export type AdapterConfig = {
    /**
     * Adapter name
     */
    type: string;
    /**
     * Adapter options
     */
    options: import("./adapters/base").BaseDefaultOptions & import("./adapters/amqp").AmqpDefaultOptions & import("./adapters/kafka").KafkaDefaultOptions & import("./adapters/nats").NatsDefaultOptions & import("./adapters/redis").RedisDefaultOptions;
};
/**
 * Middleware options
 */
export type MiddlewareOptions = {
    /**
     * Adapter name or connection string or configuration object.
     */
    adapter: string | AdapterConfig;
    /**
     * Property name of channels definition in service schema.
     */
    schemaProperty: string | null;
    /**
     * Method name to send messages.
     */
    sendMethodName: string | null;
    /**
     * Property name of the adapter instance in broker instance.
     */
    adapterPropertyName: string | null;
    /**
     * Method name to add to service in order to trigger channel handlers.
     */
    channelHandlerTrigger: string | null;
    /**
     * Using Moleculer context in channel handlers by default.
     */
    context: boolean | null;
};
