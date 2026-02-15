/**
 * NachOS Interactive Terminal Simulator
 * Simule le shell NachOS avec système de fichiers virtuel
 */

class NachOSTerminal {
    constructor(outputId, inputId) {
        this.output = document.getElementById(outputId);
        this.input = document.getElementById(inputId);
        this.currentPath = '/';
        this.commandHistory = [];
        this.historyIndex = -1;

        // Système de fichiers virtuel
        this.filesystem = {
            '/': {
                type: 'directory',
                children: {
                    'README.md': {
                        type: 'file',
                        content: '# NachOS Enhanced Shell\n\nShell interactif avec 20+ commandes intégrées.\nDéveloppé en C/C++ pour NachOS.\n\nFonctionnalités:\n- 7 commandes filesystem (ls, cat, mkdir, cd, rm, pwd, create)\n- 7 commandes réseau FTP\n- 6 commandes système\n- Protocole de transfert inter-machines\n- Script d\'automation launch-shell.sh'
                    },
                    'projects': {
                        type: 'directory',
                        children: {
                            'test1.c': {
                                type: 'file',
                                content: '#include <stdio.h>\n\nint main() {\n    printf("Hello NachOS!\\n");\n    return 0;\n}'
                            },
                            'test2.c': {
                                type: 'file',
                                content: '// Programme de test NachOS\n#include "syscall.h"\n\nint main() {\n    Create("output.txt");\n    Write("Test", 4, 1);\n    Exit(0);\n}'
                            },
                            'readme.txt': {
                                type: 'file',
                                content: 'Sample C programs for NachOS testing.\n\nThese programs demonstrate:\n- System calls\n- File operations\n- User programs'
                            }
                        }
                    },
                    'shell': {
                        type: 'file',
                        content: '[Binary executable - NachOS enhanced shell]'
                    },
                    'launch-shell.sh': {
                        type: 'file',
                        content: '#!/bin/bash\n# Script d\'automation pour lancer le shell NachOS\n./build/nachos -x shell\necho "NachOS shell started"'
                    }
                }
            }
        };

        // Initialiser le filesystem courant
        this.currentDir = this.filesystem['/'];
    }

    init() {
        // Message de bienvenue
        this.printWelcome();

        // Event listeners
        this.input.addEventListener('keydown', (e) => this.handleKeyDown(e));

        // Boutons
        const helpBtn = document.querySelector('.btn-help');
        const resetBtn = document.querySelector('.btn-reset');

        if (helpBtn) {
            helpBtn.addEventListener('click', () => {
                this.input.value = 'help';
                this.executeCommand('help');
            });
        }

        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                this.reset();
            });
        }

        // Focus automatique sur l'input
        this.input.focus();

        // Refocus quand on clique sur le terminal
        this.output.addEventListener('click', () => {
            this.input.focus();
        });
    }

    printWelcome() {
        this.printLine('NachOS Enhanced Shell - Interactive Demo', 'info');
        this.printLine('Type "help" to see available commands', 'output');
        this.printLine('');
    }

    handleKeyDown(e) {
        if (e.key === 'Enter') {
            const command = this.input.value.trim();
            if (command) {
                this.commandHistory.push(command);
                this.historyIndex = this.commandHistory.length;
                this.printLine(`nachos> ${command}`, 'command');
                this.executeCommand(command);
            } else {
                this.printLine('nachos> ', 'command');
            }
            this.input.value = '';
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (this.historyIndex > 0) {
                this.historyIndex--;
                this.input.value = this.commandHistory[this.historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (this.historyIndex < this.commandHistory.length - 1) {
                this.historyIndex++;
                this.input.value = this.commandHistory[this.historyIndex];
            } else {
                this.historyIndex = this.commandHistory.length;
                this.input.value = '';
            }
        }
    }

    executeCommand(cmdLine) {
        const parts = cmdLine.trim().split(/\s+/);
        const cmd = parts[0].toLowerCase();
        const args = parts.slice(1);

        // Commandes disponibles
        const commands = {
            'help': () => this.cmdHelp(),
            'ls': () => this.cmdLs(args),
            'cd': () => this.cmdCd(args),
            'pwd': () => this.cmdPwd(),
            'cat': () => this.cmdCat(args),
            'mkdir': () => this.cmdMkdir(args),
            'create': () => this.cmdCreate(args),
            'write': () => this.cmdWrite(args),
            'rm': () => this.cmdRm(args),
            'clear': () => this.cmdClear(),
            'whoami': () => this.cmdWhoami(),
            'date': () => this.cmdDate(),
            'about': () => this.cmdAbout(),
        };

        if (commands[cmd]) {
            commands[cmd]();
        } else if (cmd === '') {
            // Ligne vide
        } else {
            this.printLine(`Commande non reconnue: ${cmd}`, 'error');
            this.printLine('Tapez "help" pour voir les commandes disponibles.', 'output');
        }

        this.scrollToBottom();
    }

    // === COMMANDES ===

    cmdHelp() {
        this.printLine('Available commands:', 'success');
        this.printLine('');
        this.printLine('Navigation & Files:', 'info');
        this.printLine('  ls [path]         - List directory contents', 'output');
        this.printLine('  cd <dir>          - Change directory', 'output');
        this.printLine('  pwd               - Print working directory', 'output');
        this.printLine('  cat <file>        - Display file content', 'output');
        this.printLine('');
        this.printLine('File management:', 'info');
        this.printLine('  mkdir <dir>       - Create directory', 'output');
        this.printLine('  create <file>     - Create empty file', 'output');
        this.printLine('  write <file> <txt> - Write to file', 'output');
        this.printLine('  rm <file>         - Remove file', 'output');
        this.printLine('');
        this.printLine('System:', 'info');
        this.printLine('  clear             - Clear screen', 'output');
        this.printLine('  whoami            - Show current user', 'output');
        this.printLine('  date              - Show current date', 'output');
        this.printLine('  about             - About this project', 'output');
        this.printLine('  help              - Show this help', 'output');
        this.printLine('');
        this.printLine('Tip: Use arrow keys to navigate history', 'info');
        this.printLine('');
    }

    cmdLs(args) {
        const items = Object.keys(this.currentDir.children || {});
        if (items.length === 0) {
            this.printLine('Empty directory', 'output');
        } else {
            items.forEach(item => {
                const type = this.currentDir.children[item].type;
                const prefix = type === 'directory' ? '[DIR]' : '[FILE]';
                const color = type === 'directory' ? 'info' : 'output';
                this.printLine(`${prefix}  ${item}`, color);
            });
        }
    }

    cmdPwd() {
        this.printLine(this.currentPath, 'success');
    }

    cmdCd(args) {
        if (args.length === 0 || args[0] === '/' || args[0] === '~') {
            this.currentPath = '/';
            this.currentDir = this.filesystem['/'];
            this.printLine('→ Retour à la racine', 'success');
        } else if (args[0] === '..') {
            if (this.currentPath !== '/') {
                // Remonter d'un niveau (navigation simplifiée)
                const pathParts = this.currentPath.split('/').filter(p => p);
                if (pathParts.length > 0) {
                    pathParts.pop();
                    this.currentPath = '/' + pathParts.join('/');
                    if (this.currentPath === '/') {
                        this.currentDir = this.filesystem['/'];
                    }
                    this.printLine(`→ ${this.currentPath}`, 'success');
                }
            } else {
                this.printLine('Déjà à la racine', 'output');
            }
        } else {
            const dirName = args[0];
            if (this.currentDir.children && this.currentDir.children[dirName]) {
                if (this.currentDir.children[dirName].type === 'directory') {
                    this.currentDir = this.currentDir.children[dirName];
                    this.currentPath += (this.currentPath === '/' ? '' : '/') + dirName;
                    this.printLine(`→ ${this.currentPath}`, 'success');
                } else {
                    this.printLine(`${dirName}: n'est pas un répertoire`, 'error');
                }
            } else {
                this.printLine(`${dirName}: répertoire introuvable`, 'error');
            }
        }
    }

    cmdCat(args) {
        if (args.length === 0) {
            this.printLine('Usage: cat <file>', 'error');
            return;
        }

        const fileName = args[0];
        if (this.currentDir.children && this.currentDir.children[fileName]) {
            const file = this.currentDir.children[fileName];
            if (file.type === 'file') {
                file.content.split('\n').forEach(line => {
                    this.printLine(line, 'output');
                });
            } else {
                this.printLine(`${fileName}: est un répertoire`, 'error');
            }
        } else {
            this.printLine(`${fileName}: fichier introuvable`, 'error');
        }
    }

    cmdMkdir(args) {
        if (args.length === 0) {
            this.printLine('Usage: mkdir <dirname>', 'error');
            return;
        }

        const dirName = args[0];
        if (!this.currentDir.children) {
            this.currentDir.children = {};
        }

        if (this.currentDir.children[dirName]) {
            this.printLine(`${dirName}: existe déjà`, 'error');
        } else {
            this.currentDir.children[dirName] = {
                type: 'directory',
                children: {}
            };
            this.printLine(`Created: ${dirName}`, 'success');
        }
    }

    cmdCreate(args) {
        if (args.length === 0) {
            this.printLine('Usage: create <filename>', 'error');
            return;
        }

        const fileName = args[0];
        if (!this.currentDir.children) {
            this.currentDir.children = {};
        }

        if (this.currentDir.children[fileName]) {
            this.printLine(`${fileName}: existe déjà`, 'error');
        } else {
            this.currentDir.children[fileName] = {
                type: 'file',
                content: ''
            };
            this.printLine(`Created: ${fileName}`, 'success');
        }
    }

    cmdWrite(args) {
        if (args.length < 2) {
            this.printLine('Usage: write <file> <contenu>', 'error');
            return;
        }

        const fileName = args[0];
        const content = args.slice(1).join(' ');

        if (!this.currentDir.children) {
            this.currentDir.children = {};
        }

        this.currentDir.children[fileName] = {
            type: 'file',
            content: content
        };

        this.printLine(`Written: ${fileName} (${content.length} bytes)`, 'success');
    }

    cmdRm(args) {
        if (args.length === 0) {
            this.printLine('Usage: rm <file>', 'error');
            return;
        }

        const fileName = args[0];
        if (this.currentDir.children && this.currentDir.children[fileName]) {
            delete this.currentDir.children[fileName];
            this.printLine(`Removed: ${fileName}`, 'success');
        } else {
            this.printLine(`${fileName}: fichier introuvable`, 'error');
        }
    }

    cmdClear() {
        this.output.innerHTML = '';
        this.printWelcome();
    }

    cmdWhoami() {
        this.printLine('mohamed-amine', 'success');
    }

    cmdDate() {
        const now = new Date();
        this.printLine(now.toLocaleString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }), 'output');
    }

    cmdAbout() {
        this.printLine('NachOS Enhanced Shell - Academic Project', 'success');
        this.printLine('', 'output');
        this.printLine('Developer: Mohamed Amine El Ouechrine', 'output');
        this.printLine('Organization: Ensimag', 'output');
        this.printLine('Duration: 2 months', 'output');
        this.printLine('Language: C/C++', 'output');
        this.printLine('', 'output');
        this.printLine('Features:', 'info');
        this.printLine('- 20+ built-in commands (filesystem, network, system)', 'output');
        this.printLine('- Custom FTP protocol for inter-machine transfer', 'output');
        this.printLine('- 0 memory leaks (Valgrind validated)', 'output');
        this.printLine('- 3 flavors: step4, step5, network', 'output');
        this.printLine('- Automation script: launch-shell.sh', 'output');
        this.printLine('', 'output');
        this.printLine('Note: This web demo is a JavaScript simulation.', 'info');
        this.printLine('The real shell runs in the NachOS environment.', 'info');
    }

    // === UTILITAIRES ===

    printLine(text, className = 'output') {
        const line = document.createElement('div');
        line.className = `terminal-line ${className}-line`;
        line.textContent = text;
        this.output.appendChild(line);
    }

    scrollToBottom() {
        this.output.scrollTop = this.output.scrollHeight;
    }

    reset() {
        this.output.innerHTML = '';
        this.currentPath = '/';
        this.currentDir = this.filesystem['/'];
        this.commandHistory = [];
        this.historyIndex = -1;
        this.printWelcome();
        this.input.value = '';
        this.input.focus();
    }
}

// Initialisation auto si les éléments existent
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const outputEl = document.getElementById('terminal-output');
        const inputEl = document.getElementById('terminal-input');

        if (outputEl && inputEl) {
            const terminal = new NachOSTerminal('terminal-output', 'terminal-input');
            terminal.init();
        }
    });
}
