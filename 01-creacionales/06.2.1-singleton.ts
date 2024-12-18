/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */

import { configManager } from './singleton/config-manager.ts'


configManager.setconfig('api', 'http://api.com');
configManager.setconfig('version', '1.0.0');
configManager.setconfig('timeout', '1000');
configManager.getAllconfig(); // { api: 'http://api.com', version: '1.0.0', timeout: '1000' }