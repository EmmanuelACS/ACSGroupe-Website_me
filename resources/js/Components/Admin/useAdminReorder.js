import { router } from '@inertiajs/react';

// Réordonnancement (monter/descendre) partagé par les modules Staff et
// Slideshow, qui exposent chacun une route "reorder" acceptant { order: number[] }.
export function useAdminReorder(items, routeName) {
    return (index, direction) => {
        const order = items.map((item) => item.id);
        const target = index + direction;
        if (target < 0 || target >= order.length) return;
        [order[index], order[target]] = [order[target], order[index]];
        router.post(route(routeName), { order }, { preserveScroll: true });
    };
}
