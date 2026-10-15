export interface ScrollbarStatus {
    [id: string]: boolean;
}

export class ScrollbarManager {
    constructor();

    status: ScrollbarStatus;

    getScrollbarWidth(): number;
    hasVerticalScrollbar(): boolean;

    updateStatus(id: string, action: 'toggle' | boolean): void;
    manage(): void;
    add(id: string): void;
    remove(id: string): void;
    toggle(id: string): void;
}

export interface BottomSheetGlobalOptions {
    contentDraggable?: boolean;
    snapOnDrag?: boolean;
    startExpanded?: boolean;
    mouseDrag?: boolean;
    touchDrag?: boolean;
    ignoreMouseSelector?: string;
    ignoreTouchSelector?: string;
    baseZIndex?: number;
}

export interface BottomSheetOpenEvent {
    id: string;
    sheet: HTMLElement;
    content: HTMLElement;
    overlay: HTMLElement;
}

export interface BottomSheetOpenOptions {
    title?: string;
    content?: string | Node;
    width?: string | null;
    height?: string | null;
    onClose?: (() => void) | null;
    onOpen?: ((data: BottomSheetOpenEvent) => void) | null;
    contentDraggable?: boolean | null;
    snapOnDrag?: boolean | null;
    startExpanded?: boolean | null;
    mouseDrag?: boolean | null;
    touchDrag?: boolean | null;
    ignoreMouseSelector?: string | null;
    ignoreTouchSelector?: string | null;
    className?: string;
}

export type BottomSheetUpdateOptions =
    Partial<BottomSheetOpenOptions>;

export class BottomSheetManager {
    constructor(globalOptions?: BottomSheetGlobalOptions);
    scrollbar: ScrollbarManager;
    stack: Array<any>;
    open(options?: BottomSheetOpenOptions): string;

    close(
        id?: string | null,
        options?: {
            force?: boolean;
            fromHistory?: boolean;
        }
    ): void;

    updateOptions(
        id: string,
        options?: BottomSheetUpdateOptions
    ): void;
}