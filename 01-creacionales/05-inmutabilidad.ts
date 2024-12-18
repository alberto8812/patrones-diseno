/**
 * ! Inmutabilidad con copia
 * Aunque la inmutabilidad es una buena práctica, no siempre es posible.
 * En estos casos, se puede hacer una copia del objeto y modificar la copia.
 *
 *  * Es útil para mantener un historial de estados en aplicaciones interactivas.
 *
 */

class CodeEditiorState {
    readonly content: string;
    readonly cursorPosition: number;
    readonly unsavedChanges: boolean;

    constructor(content: string, cursorPosition: number, unsavedChanges: boolean) {
        this.content = content
        this.cursorPosition = cursorPosition
        this.unsavedChanges = unsavedChanges
    }

    displaystate() {
        console.log(`
            Contenido:${this.content}
            Posición del cursor:${this.cursorPosition}
            Cambios sin guardar:${this.unsavedChanges}
            `)
    }

    copyWith({ content, cursorPosition, unsavedChanges }: Partial<CodeEditiorState>): CodeEditiorState {
        return new CodeEditiorState(
            content ?? this.content,
            cursorPosition ?? this.cursorPosition,
            unsavedChanges ?? this.unsavedChanges
        )
    }
}

// se debe crear una clase que permita modificar el estado del editor

class CodeEditorHistory {
    private history: CodeEditiorState[] = [];
    private currentIndex: number = -1;


    /**
     * metodo que permite obtener el estado actual
     * @param state 
     */
    save(state: CodeEditiorState): void {
        if (this.currentIndex < this.history.length - 1) {
            this.history.splice(0, this.currentIndex + 1)
        }
        this.history.push(state)
        this.currentIndex++
    }

    /**
     *  metodo que permite obtener el estado anterior
     * @returns 
     */

    readonly(): CodeEditiorState | null {
        if (this.currentIndex < this.history.length - 1) {
            this.currentIndex++
            return this.history[this.currentIndex]
        }
        // si no hay historial ya que no hay cambios
        return null
    }

    undo(): CodeEditiorState | null {
        if (this.currentIndex > 0) {
            this.currentIndex--
            return this.history[this.currentIndex]
        }
        return null
    }


}


function main() {
    const editorState = new CodeEditiorState('const x = 10', 12, false)
    const history = new CodeEditorHistory()

    history.save(editorState.copyWith({ cursorPosition: 0 }))
    history.save(editorState.copyWith({ content: 'const x = 20' }))
    history.save(editorState.copyWith({ content: 'const x = 30' }))

    console.log(history.readonly())
    console.log(history.readonly())
    console.log(history.readonly())
    console.log(history.readonly())
    console.log(history.undo())
}