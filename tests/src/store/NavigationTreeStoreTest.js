/**
 * conjoon
 * (c) 2007-2016 conjoon.org
 * licensing@conjoon.org
 *
 * app-cn_treenavviewport
 * Copyright (C) 2016 Thorsten Suckow-Homberg/conjoon.org
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

describe('conjoon.cn_treenavviewport.store.NavigationTreeStoreTest', function(t) {

    t.it("Should properly create the store and check for default config", function(t) {

        var store = Ext.create('conjoon.cn_treenavviewport.store.NavigationTreeStore');

        t.expect(store instanceof Ext.data.TreeStore).toBe(true);

        t.expect(store.config.model).toBe('conjoon.cn_treenavviewport.model.NavigationModel');

        t.expect(store.alias).toContain('store.cn_treenavviewport-navtreestore');

        t.expect(store.getRootNode() instanceof conjoon.cn_treenavviewport.model.NavigationModel).toBe(true);
        t.expect(store.getRootNode().get('expanded')).toBe(true);

    });

});
